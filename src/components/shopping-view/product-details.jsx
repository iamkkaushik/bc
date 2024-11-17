import { StarIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { useToast } from "../ui/use-toast";
import { setProductDetails } from "@/store/shop/products-slice";
import { Label } from "../ui/label";
import StarRatingComponent from "../common/star-rating";
import { useEffect, useState } from "react";
import { addReview, getReviews } from "@/store/shop/review-slice";

function ProductDetailsDialog({ open, setOpen, productDetails }) {
  const [reviewMsg, setReviewMsg] = useState("");
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.shopCart);
  const { reviews } = useSelector((state) => state.shopReview);

  const { toast } = useToast();
  
  function handleRatingChange(getRating) {
    console.log(getRating, "getRating");

    setRating(getRating);
  }

  function handleAddToCart(getCurrentProductId, getTotalStock) {
    let getCartItems = cartItems.items || [];

    if (getCartItems.length) {
      const indexOfCurrentItem = getCartItems.findIndex(
        (item) => item.productId === getCurrentProductId
      );
      if (indexOfCurrentItem > -1) {
        const getQuantity = getCartItems[indexOfCurrentItem].quantity;
        if (getQuantity + 1 > getTotalStock) {
          toast({
            title: `Only ${getQuantity} quantity can be added for this item`,
            variant: "destructive",
          });

          return;
        }
      }
    }
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Product is added to cart",
        });
      }
    });
  }

  function handleDialogClose() {
    setOpen(false);
    dispatch(setProductDetails());
    setRating(0);
    setReviewMsg("");
  }

  useEffect(() => {
    if (open) {
      // Push a temporary state into the history stack
      window.history.pushState(null, "", window.location.href);

      const handlePopState = () => {
        setOpen(false);
        dispatch(setProductDetails());
      };

      // Listen to the popstate event (triggered on back button press)
      window.addEventListener("popstate", handlePopState);

      return () => {
        // Cleanup listener when the dialog is closed
        window.removeEventListener("popstate", handlePopState);
      };
    }
  }, [open, dispatch, setOpen]);

  function handleAddReview() {
    dispatch(
      addReview({
        productId: productDetails?._id,
        userId: user?.id,
        userName: user?.userName,
        reviewMessage: reviewMsg,
        reviewValue: rating,
      })
    ).then((data) => {
      if (data.payload.success) {
        setRating(0);
        setReviewMsg("");
        dispatch(getReviews(productDetails?._id));
        toast({
          title: "Review added successfully!",
        });
      }
    });
  }

  useEffect(() => {
    if (productDetails !== null) dispatch(getReviews(productDetails?._id));
  }, [productDetails]);

  console.log(reviews, "reviews");

  const averageReview =
    reviews && reviews.length > 0
      ? reviews.reduce((sum, reviewItem) => sum + reviewItem.reviewValue, 0) /
        reviews.length
      : 0;

  return (
    <Dialog open={open} onOpenChange={handleDialogClose}>
  <DialogContent className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:p-8 p-3 max-w-full sm:max-w-4xl lg:max-w-6xl m-8 sm:m-0">
    {/* Left Side: Product Image */}
    <div className="relative overflow-hidden rounded-lg">
      <img
        src={productDetails?.image}
        alt={productDetails?.title}
        className="aspect-square w-full h-auto object-contain"
      />
    </div>

  
      {/* Right Side: Product Details */}
      <div>
        {/* Product Title and Description */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold">
            {productDetails?.title}
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg mb-5 mt-4 whitespace-pre-wrap">
            {productDetails?.description}
          </p>
        </div>
  
        {/* Pricing Section */}
        <div className="flex items-center justify-between">
          <p
            className={`text-xl sm:text-2xl font-bold text-primary ${
              productDetails?.salePrice > 0 ? "line-through" : ""
            }`}
          >
            ₹{productDetails?.price}
          </p>
          {productDetails?.salePrice > 0 ? (
            <p className="text-lg sm:text-xl font-bold text-muted-foreground">
              ₹{productDetails?.salePrice}
            </p>
          ) : null}
        </div>
  
        {/* Ratings */}
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center gap-0.5">
            <StarRatingComponent rating={averageReview} />
          </div>
          <span className="text-muted-foreground text-sm sm:text-base">
            ({averageReview.toFixed(2)})
          </span>
        </div>
  
        {/* Add to Cart Button */}
        <div className="mt-5 mb-5">
          {productDetails?.totalStock === 0 ? (
            <Button className="w-full opacity-60 cursor-not-allowed">
              Out of Stock
            </Button>
          ) : (
            <Button
              className="w-full"
              onClick={() =>
                handleAddToCart(
                  productDetails?._id,
                  productDetails?.totalStock
                )
              }
            >
              Add to Cart
            </Button>
          )}
        </div>
  
        <Separator />
  
        {/* Reviews Section */}
        <div className="max-h-[300px] overflow-auto">
          <h2 className="text-lg sm:text-xl font-bold mb-4">Reviews</h2>
          <div className="grid gap-6">
            {reviews && reviews.length > 0 ? (
              reviews.map((reviewItem) => (
                <div className="flex gap-4" key={reviewItem._id}>
                  <Avatar className="w-10 h-10 border">
                    <AvatarFallback>
                      {reviewItem?.userName[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold">{reviewItem?.userName}</h3>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <StarRatingComponent rating={reviewItem?.reviewValue} />
                    </div>
                    <p className="text-muted-foreground">
                      {reviewItem.reviewMessage}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <h1>No Reviews</h1>
            )}
          </div>
  
          {/* Add a Review Section */}
          <div className="mt-10 flex-col flex gap-2">
            <Label>Write a review</Label>
            <div className="flex gap-1">
              <StarRatingComponent
                rating={rating}
                handleRatingChange={handleRatingChange}
              />
            </div>
            <Input
              name="reviewMsg"
              value={reviewMsg}
              onChange={(event) => setReviewMsg(event.target.value)}
              placeholder="Write a review..."
            />
            <Button
              onClick={handleAddReview}
              disabled={reviewMsg.trim() === ""}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
  

//     <Dialog open={open} onOpenChange={handleDialogClose}>
//   <DialogContent className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:p-8 p-9 max-w-full sm:max-w-4xl lg:max-w-6xl">
//     {/* Left Side: Product Image */}
//     <div className="relative overflow-hidden rounded-lg">
//       <img
//         src={productDetails?.image}
//         alt={productDetails?.title}
//         className="aspect-square w-full h-auto object-cover"
//       />
//     </div>

//     {/* Right Side: Product Details */}
//     <div>
//       {/* Product Title and Description */}
//       <div>
//         <h1 className="text-2xl sm:text-3xl font-extrabold">
//           {productDetails?.title}
//         </h1>
//         <p className="text-muted-foreground text-base sm:text-lg mb-5 mt-4">
//           {productDetails?.description}
//         </p>
//       </div>

//       {/* Pricing Section */}
//       <div className="flex items-center justify-between">
//         <p
//           className={`text-xl sm:text-2xl font-bold text-primary ${
//             productDetails?.salePrice > 0 ? "line-through" : ""
//           }`}
//         >
//           ₹{productDetails?.price}
//         </p>
//         {productDetails?.salePrice > 0 ? (
//           <p className="text-lg sm:text-xl font-bold text-muted-foreground">
//             ₹{productDetails?.salePrice}
//           </p>
//         ) : null}
//       </div>

//       {/* Ratings */}
//       <div className="flex items-center gap-2 mt-2">
//         <div className="flex items-center gap-0.5">
//           <StarRatingComponent rating={averageReview} />
//         </div>
//         <span className="text-muted-foreground text-sm sm:text-base">
//           ({averageReview.toFixed(2)})
//         </span>
//       </div>

//       {/* Add to Cart Button */}
//       <div className="mt-5 mb-5">
//         {productDetails?.totalStock === 0 ? (
//           <Button className="w-full opacity-60 cursor-not-allowed">
//             Out of Stock
//           </Button>
//         ) : (
//           <Button
//             className="w-full"
//             onClick={() =>
//               handleAddToCart(
//                 productDetails?._id,
//                 productDetails?.totalStock
//               )
//             }
//           >
//             Add to Cart
//           </Button>
//         )}
//       </div>

//       <Separator />

//       {/* Reviews Section */}
//       <div className="max-h-[300px] overflow-auto">
//         <h2 className="text-lg sm:text-xl font-bold mb-4">Reviews</h2>
//         <div className="grid gap-6">
//           {reviews && reviews.length > 0 ? (
//             reviews.map((reviewItem) => (
//               <div className="flex gap-4" key={reviewItem._id}>
//                 <Avatar className="w-10 h-10 border">
//                   <AvatarFallback>
//                     {reviewItem?.userName[0].toUpperCase()}
//                   </AvatarFallback>
//                 </Avatar>
//                 <div className="grid gap-1">
//                   <div className="flex items-center gap-2">
//                     <h3 className="font-bold">{reviewItem?.userName}</h3>
//                   </div>
//                   <div className="flex items-center gap-0.5">
//                     <StarRatingComponent rating={reviewItem?.reviewValue} />
//                   </div>
//                   <p className="text-muted-foreground">
//                     {reviewItem.reviewMessage}
//                   </p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <h1>No Reviews</h1>
//           )}
//         </div>

//         {/* Add a Review Section */}
//         <div className="mt-10 flex-col flex gap-2">
//           <Label>Write a review</Label>
//           <div className="flex gap-1">
//             <StarRatingComponent
//               rating={rating}
//               handleRatingChange={handleRatingChange}
//             />
//           </div>
//           <Input
//             name="reviewMsg"
//             value={reviewMsg}
//             onChange={(event) => setReviewMsg(event.target.value)}
//             placeholder="Write a review..."
//           />
//           <Button
//             onClick={handleAddReview}
//             disabled={reviewMsg.trim() === ""}
//           >
//             Submit
//           </Button>
//         </div>
//       </div>
//     </div>
//   </DialogContent>
// </Dialog>

  );
}

export default ProductDetailsDialog;
