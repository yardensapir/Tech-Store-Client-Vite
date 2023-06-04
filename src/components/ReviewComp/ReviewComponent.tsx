import RatingComponent from "../Rating/RatingComponent";
type Props = {
    rating: number;
};
const ReviewComponent = ({ rating }: Props) => {
    return (
        <div className="flex flex-col items-start gap-2 p-2">
            <span>Yarden Sapir</span>
            <RatingComponent value={rating} />
            <span>Date Post:</span>
            <div className="">
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, at. Accusantium, fuga, perferendis, voluptatibus necessitatibus quia doloremque quibusdam incidunt quasi accusamus at suscipit labore nam quos nostrum magnam iure officia?</p>
                <hr className=" mt-2 " />
            </div>
        </div>
    )
};
export default ReviewComponent;