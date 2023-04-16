function Course({id, content, title, price,deleteCourse}) {
    return (
        <div className="course">
            <div className="course-title-price">
                <h2 className="course-title">{title}</h2>
                <h4 className="course-price">{price} TL</h4>
            </div>
            <p className="course-content">{content}</p>
            <button className="course-delete" onClick={()=>deleteCourse(id)}>Sil</button>
        </div>);
}

export default Course;
