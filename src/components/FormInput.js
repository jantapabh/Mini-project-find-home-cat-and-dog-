import React from 'react'
import './Form.css'


const FormInput = () => {

    return (
        <div>
            <div className="Footer">
            </div>
            <div className="col-6 mt-5 mx-auto card">
                <div className="card-body">
                    <h1 className="Topic">ADD CAT OR DOG</h1>
                    <h2 className="Topic">" Please enter the truth "</h2>
                </div>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Image : รูปภาพ</label>
                        <input type="file"
                            name="username"
                            className="form-control"
                            id="username"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Strain : สายพันธ์</label>
                        <input type="text"
                            name="username"
                            className="form-control"
                            id="username"
                        />

                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Name : ชื่อ</label>
                        <input type="password"
                            name="password"
                            className="form-control"
                            id="password"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Old : อายุ</label>
                        <input type="text"
                            name="username"
                            className="form-control"
                            id="username"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Habits : นิสัย</label>
                        <input type="text"
                            name="username"
                            className="form-control"
                            id="username"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Because : เหตุผลที่หาบ้านใหม่</label>
                        <input type="text"
                            name="username"
                            className="form-control"
                            id="username"
                        />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary my-1" type="submit">ADD</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormInput;

