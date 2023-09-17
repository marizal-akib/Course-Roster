/* eslint-disable react/prop-types */

const Cart = ({addedCourses}) => {
    console.log(addedCourses);
    return (
        <div className="md:w-1/3">
            <h3>Credit Hour Remaining 7 hr</h3>
            <hr />
            <h2>Course Name</h2>
            {
                addedCourses.map((course,idx) =>(
                   <ol key={idx}><li>{idx+1}. {course.title}</li></ol>
                  
                ))
            }
        </div>
    );
};

export default Cart;