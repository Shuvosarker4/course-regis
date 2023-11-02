import PropTypes from 'prop-types';
const Course = ({select,total,credit,remain}) => {
    
    return (
        <div className="mt-10 m-2 w-96">
            <h1 className="text-xl font-semibold text-center mb-2 text-cyan-500 ">Credit Hour Remaining {remain} hr</h1>
            <hr />
            <div>
                <div className="card w-96 rounded-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-xl font-bold text-center my-2">Course Name</h2>
                        {
                            select.map((data,idx)=><p key={idx} className="text-xl ps-2 pb-1">{idx + 1}. {data.header}</p>)
                        }
                        <hr className="mt-2" />
                        <div className="card-actions text-center justify-end">
                        <p className="my-2 text-xl font-bold">Total Credit Hour : {credit}</p>
                        <hr />
                        <p className="my-2 pb-2 text-xl font-bold">Total Price : {total} USD</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
Course.propTypes = {
    select:PropTypes.array,
    total:PropTypes.number,
    credit:PropTypes.number,
    remain:PropTypes.number,
}

export default Course;