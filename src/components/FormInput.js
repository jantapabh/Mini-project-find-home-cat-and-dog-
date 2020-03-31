import React from 'react'


const FormInput = () => {
    return(

    //     <div>
    //     <h2>ADD CAT OR DOG</h2>
    //     <table>
    //         <tbody> <tr>
    //                 <td>Strain : สายพันธ์</td>
    //                 <td>
    //                     <input className='Input-text' type="number" />
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>Name : ชื่อ</td>
    //                 <td>
    //                     <input className='Input-text' type="text"  /> <br />
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>Old : อายุ</td>
    //                 <td>
    //                     <input className='Input-text' type="text" /> <br />
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>Habits : นิสัย</td>
    //                 <td>
    //                     <input className='Input-text' type="text" /> <br />
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>ฺBECAUSE : เหตุผลที่หาบ้านใหม่</td>
    //                 <td>
    //                     <input className='Input-text' type="text" /> <br />
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td></td>
    //                 <td>
    //                     <button className='btn'>CREATE</button>
    //                 </td>
    //             </tr>
    //         </tbody>
    //     </table>
    // </div>
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
    );
}

export default FormInput;

