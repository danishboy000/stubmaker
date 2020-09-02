import '../public/html2canvas.min.js'
import React,{useState,useEffect} from 'react'
import Data from '../data'
import Template1 from '../templates/template_1'
import dynamic from 'next/dynamic'
import PayWithPayPal from '../components/PayWIthPaypal'
import 'bootstrap/dist/css/bootstrap.min.css';
import Popup from '../components/popup'

export default function index() {

    const [preview,setPreview] = useState(false);
    const [data,setData] = useState(Data);
    const [checkout,setCheckout] = useState(false);
    const [load,setLoad] = useState(false);
    const [popup,setPopup] = useState(false);

    useEffect(() => {
        window.addEventListener('click',()=>{
            setPopup(false);
        })
    })

    useEffect(()=>{
        generateStub();
    },[data])

    const handleInput = (e) => {
        var id = e.target.id;
        var value = e.target.value;
        setData({...data,[id]:value});   
    }

    const handleFileUpload = (e) => {
        var file = e.target.files[0];
        var id = e.target.id;
        var reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('fileName').innerHTML = file.name;;
            setData({...data,[id]:e.target.result});
        };

        reader.readAsDataURL(file);
    } 

    const downloadPdf = () => {
        setCheckout(true);
    }



    const generateStub = () => {
        if(load)
            return;
        setLoad(true);
        document.getElementById('template_1').style.display = 'block';
        html2canvas(document.querySelector('#template_1')).then(function(canvas) {
            const imgData = canvas.toDataURL('image/png');
            var img = document.getElementById('previewImage');
            var overlay = document.getElementsByClassName('overlay')[0];
            img.src = imgData;
            img.onmouseover = function (e) {
                overlay.style.display = 'flex';
                overlay.style.justifyContent = 'center';
                overlay.style.alignItems = 'center';
            }
            overlay.onmouseout = function (e) {
                overlay.style.display = 'none';
            }
            setLoad(false);
      })
       
    }

    const showPopup = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setPopup(true);
    }

    const closePopup = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setPopup(false);
    }

    
                
    
    return (
        <>
        <Template1 data = {data}/>
        
        <div className="container">
            <h1>Create Your Stub</h1>
            {/* <p>It will take you an average of less than 2 minutes!</p> */}
            <div className="leftCon">

                <h4>Company Information</h4>
                <div className ="form-group">
                    <label htmlFor = ''>Company Name</label>
                    <input className="form-control" id = 'company_name'  type="text" onChange = {handleInput} defaultValue = {data.company_name}/>
                </div>

                <div className ="form-group">
                    <label htmlFor = 'company_logo'>Company Logo</label>
                    <div className ="custom-file">
                        <input type="file" className ="custom-file-input" id="company_logo" onChange = {handleFileUpload} accept="image/*"></input>/>
                        <label className="custom-file-label" htmlFor="company_logo" id = 'fileName'>Choose file</label>
                    </div>
                </div>
                
                <div className="form-group">
                    <label htmlFor = ''>Company Address</label>
                    <input className="form-control" id = 'company_address' type="text" onChange = {handleInput}/>
                </div>
                
                <div className="form-group">
                    <label htmlFor = ''>Company Phone Number</label>
                    <input className="form-control" id = 'company_phoneNumber' type="text" onChange = {handleInput}/>
                </div>
                
                
                <div className ="form-group">
                    <label htmlFor = ''>Company EIN/SSN</label>
                    <input className="form-control" id = 'company_ssn' type="text" onChange = {handleInput}/>
                </div>
                
                <h4>Employee Information</h4>
                <div className="form-group">
                    <label htmlFor = ''>Emloyee Name</label>
                    <input className="form-control" id = 'employee_name' type="text" onChange = {handleInput} />
                </div>
                
                <div className="form-group">
                    <label htmlFor = ''>Employee SSID</label>
                    <input className="form-control" id = 'employee_ssn' type="text" onChange = {handleInput}/>
                </div>
                
                <div className="form-group">
                    <label htmlFor = ''>Employee ID</label>
                    <input className="form-control" id = 'employee_id' type="text" onChange = {handleInput}/>
                </div>
                
                <div className="form-group">
                    <label htmlFor = ''>Check Number</label>
                    <input className="form-control" id = 'salary_checkNo' type="text" onChange = {handleInput}/>
                </div>
                

                {
                    checkout && <PayWithPayPal /> 
                }

                <div className="downloadBtn" onClick = {downloadPdf}>
                    Download pdf
                </div>

                
            </div>
            <div className="rightCon" >
                <img  id = 'previewImage' src="" alt=""/>
                <div className="overlay" onClick = {showPopup}>
                    <div  className="btn btn-light">Preview</div>
                </div>
            </div>


        </div>

        {popup && <Popup close = {closePopup}/>}

        
        </>
    )
}
