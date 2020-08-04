import React, {useState} from "react";

export default function AddArticle () {
    const [value, setValue] = useState('default');
    const handleChange = event => setValue(event.target.value);
    const handleSubmit = event => {
        alert('A name was submitted: ' + value);
        event.preventDefault();
    };
    return (
        <div>
        <h1>Write new article</h1>
        <div className="col-md-6">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Email address</label>
                    <input type="text" className="form-control" id="title" aria-describedby="emailHelp"
                           placeholder="Article Title" value={value} onChange={handleChange} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                            else.
                        </small>
                </div>
                <div className="form-group">
                    <label htmlFor="content">Example textarea</label>
                    <textarea className="form-control" id="content" rows="3" />
                </div>
                <div className="form-group">
                    <div >
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
}