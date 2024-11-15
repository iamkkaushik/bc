import { Button } from "@/components/ui/button";
import bannerOne from "../../assets/banner-1.webp";
import bannerTwo from "../../assets/banner-2.webp";
import bannerThree from "../../assets/banner-3.webp";
import {
  Airplay,
  BabyIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloudLightning,
  Heater,
  Images,
  Shirt,
  ShirtIcon,
  ShoppingBasket,
  UmbrellaIcon,
  WashingMachine,
  WatchIcon,

  UtensilsCrossed, // for plates
  Box, // for containers
  Package, // for boxes
  Store, // for shop
  Leaf, // for bio products
  GlassWater, // for transparent containers
  Cake, // for muffin cups
  CircleDollarSign // for silver plates

} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllFilteredProducts,
  fetchProductDetails,
} from "@/store/shop/products-slice";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { useNavigate } from "react-router-dom";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { useToast } from "@/components/ui/use-toast";
import ProductDetailsDialog from "@/components/shopping-view/product-details";
import { getFeatureImages } from "@/store/common-slice";
import bannerImage from "@/assets/banner-1.webp";
// import bannerImage from "../../assets/banner.webp";

const categoriesWithIcon = [
  { id: "plates", label: "Plates", icon: bannerImage},
  { id: "glasses", label: "Glasses", icon: CloudLightning },
  { id: "cups", label: "Cups", icon: CloudLightning },
  { id: "bio spoons", label: "Cutlery", icon: CloudLightning },
  { id: "boxes", label: "Boxes", icon: CloudLightning },
  { id: "bio bowls", label: "Bowls", icon: CloudLightning },
  { id: "glasses", label: "Dine in Containers", icon: CloudLightning },
  { id: "plastic container", label: "Containers", icon: BabyIcon },
  { id: "meal tray", label: "Trays", icon: WatchIcon },
  { id: "tissues", label: "Tissues", icon: UmbrellaIcon },
];

// const categoriesWithIcon = [
//   { 
//     id: "plates", 
//     label: "Plates", 
//     icon: bannerImage,
//     subcategories: ["Dinner Plates", "Salad Plates", "Dessert Plates", "Charger Plates"]
//   },
//   { 
//     id: "glasses", 
//     label: "Glasses", 
//     icon: CloudLightning,
//     subcategories: ["Wine Glasses", "Water Glasses", "Champagne Flutes", "Cocktail Glasses"]
//   },
//   { 
//     id: "kids", 
//     label: "Kids", 
//     icon: BabyIcon,
//     subcategories: ["Plates", "Cups", "Utensils", "Lunch Boxes"]
//   },
//   { 
//     id: "accessories", 
//     label: "Accessories", 
//     icon: WatchIcon,
//     subcategories: ["Napkin Rings", "Placemats", "Coasters", "Serving Utensils"]
//   },
//   { 
//     id: "footwear", 
//     label: "Footwear", 
//     icon: UmbrellaIcon,
//     subcategories: ["Kitchen Shoes", "Outdoor Dining Slippers", "Anti-Slip Socks"]
//   },
// ];

const brandsWithIcon = [
  { id: "sarda", label: "Sarda", icon: UtensilsCrossed }, // plates
  { id: "rr", label: "RR", icon: Box }, // containers
  { id: "lotus", label: "Lotus", icon: Box }, // containers
  { id: "sd", label: "S.D", icon: Package }, // boxes
  { id: "bhadra", label: "Bhadra", icon: Store }, // shop brand
  { id: "chuk", label: "Chuk", icon: Leaf }, // bio products
  { id: "benxon", label: "Benxon", icon: GlassWater }, // transparent containers
  { id: "ecopack", label: "Ecopack", icon: Cake }, // muffin cups
  { id: "pappco greenwre", label: "Pappco Greenware", icon: Leaf }, // bio products
  { id: "paras", label: "Paras EcoVision", icon: Leaf }, // bio products
  { id: "dove", label: "Dove", icon: CircleDollarSign }, // silver plates
  { id: "talyx", label: "Kalyx", icon: Box }, // plastic containers
];

// const brandsWithIcon = [
//   { id: "sarda", label: "Sarda", icon: UtensilsCrossed },
//   { id: "rr", label: "RR", icon: WashingMachine },
//   { id: "lotus", label: "Lotus", icon: ShoppingBasket },
//   { id: "sd", label: "S.D", icon: Airplay },
//   { id: "bhadra", label: "Bhadra", icon: Images },
//   { id: "chuk", label: "Chuk", icon: Heater },
//   { id: "benxon", label: "Benxon", icon: Heater },
//   { id: "ecopack", label: "Ecopack", icon: Heater },
//   // { id: "ecoware", label: "EcoWare", icon: Heater },
//   { id: "pappco greenwre", label: "Pappco Greenware", icon: Heater },
//   { id: "paras", label: "Paras EcoVision", icon: Heater },
//   { id: "dove", label: "Dove", icon: Heater },
//   { id: "talyx", label: "Kalyx", icon: Heater },
//   // { id: "classic", label: "Classic", icon: Heater },
// ];

const materialWithIcon = [
  { id: "biodegradable", label: "Bio-Degradable", icon: Shirt },
  { id: "conventionalplastic ", label: "Conventional Plastics ", icon: WashingMachine },
  { id: "wood", label: "Wood", icon: ShoppingBasket },
  { id: "aluminum", label: "Aluminum", icon: Airplay },
  { id: "palmleaf", label: "Palm Leaf", icon: Images },
  { id: "foam", label: "Foam", icon: Heater },
];
function ShoppingHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { productList, productDetails } = useSelector(
    (state) => state.shopProducts
  );
  const { featureImageList } = useSelector((state) => state.commonFeature);

  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate(`/shop/listing`);
  }

  function handleGetProductDetails(getCurrentProductId) {
    dispatch(fetchProductDetails(getCurrentProductId));
  }

  // function handleAddtoCart(getCurrentProductId) {
  //   dispatch(
  //     addToCart({
  //       userId: user?.id,
  //       productId: getCurrentProductId,
  //       quantity: 1,
  //     })
  //   ).then((data) => {
  //     if (data?.payload?.success) {
  //       dispatch(fetchCartItems(user?.id));
  //       toast({
  //         title: "Product is added to cart",
  //       });
  //     }
  //   });
  // }

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % featureImageList.length);
    }, 15000);

    return () => clearInterval(timer);
  }, [featureImageList]);

  useEffect(() => {
    dispatch(
      fetchAllFilteredProducts({
        filterParams: {},
        sortParams: "price-lowtohigh",
      })
    );
  }, [dispatch]);

  console.log(productList, "productList");

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-[150px] sm:h-[200px] md:h-[300px] lg:h-[600px] overflow-hidden">
      {featureImageList && featureImageList.length > 0
      ? featureImageList.map((slide, index) => (
          <img
            src={slide?.image}
            key={index}
            // className={`${
            //   index === currentSlide ? "opacity-100" : "opacity-0"
            // } absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`}
            // style={{ objectFit: 'contain', width: '100%', height: '100%' }}

            className={`absolute top-0 left-0 w-full h-full object-cover ${ index === currentSlide ? "opacity-100" : "opacity-0" } transition-opacity duration-1000 ${window.innerWidth <= 600 ? "object-contain object-center" : ""}`}
          />
        ))
      : null}
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentSlide(
              (prevSlide) =>
                (prevSlide - 1 + featureImageList.length) %
                featureImageList.length
            )
          }
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentSlide(
              (prevSlide) => (prevSlide + 1) % featureImageList.length
            )
          }
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
        >
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
      </div>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Shop by category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categoriesWithIcon.map((categoryItem) => (
              <Card
                onClick={() =>
                  handleNavigateToListingPage(categoryItem, "category")
                }
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <img
                    src={categoryItem.icon}
                    alt={categoryItem.label}
                    className="w-full h-40 object-cover"
                  />
                  {/* <categoryItem.icon className="w-12 h-12 mb-4 text-primary" /> */}
                  <span className="font-bold">{categoryItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by Brand</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brandsWithIcon.map((brandItem) => (
              <Card
                onClick={() => handleNavigateToListingPage(brandItem, "brand")}
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <brandItem.icon className="w-12 h-12 mb-4 text-primary" />
                  <span className="font-bold">{brandItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by Product Material</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {materialWithIcon.map((brandItem) => (
              <Card
                onClick={() => handleNavigateToListingPage(brandItem, "brand")}
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <brandItem.icon className="w-12 h-12 mb-4 text-primary" />
                  <span className="font-bold">{brandItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* const displayedProducts = productList?.slice(0, 10) || []; */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Feature Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productList && productList.length > 0
              ? productList.slice(0, 8).map((productItem) => (
                  <ShoppingProductTile
                    handleGetProductDetails={handleGetProductDetails}
                    product={productItem}
                    // handleAddtoCart={handleAddtoCart}
                  />
                ))
              : null}
          </div>
        </div>
      </section>
      <ProductDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
      />
    </div>
  );
}

export default ShoppingHome;
