/* eslint-disable react/prop-types */

const Cart = ({addedCourses,remaining,totalHour,price}) => {
    // console.log(addedCourses);
    return (
        <div className="md:w-1/3">
            <h3>Credit Hour Remaining {remaining}hr</h3>
            <hr />
            <div className="min-h-[300px]">
            <h2 >Course Name</h2>
            {
                addedCourses.map((course,idx) =>(
                   <ol  key={idx}><li>{idx+1}. {course.title}</li></ol>
                  
                ))
            }
            </div>
            <hr />
            <p>Total Credit Hour : {totalHour}hr</p>
            <hr />
            <p>Total Price : {price} USD</p>
        </div>
    );
};

export default Cart;