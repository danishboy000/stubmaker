import '../public/html2canvas.min.js'
import React,{useState,useEffect} from 'react'
import Data from '../data'
import Template1 from '../templates/template_1'
import dynamic from 'next/dynamic'
import PayWithPayPal from '../components/PayWIthPaypal'

export default function index() {

    const [preview,setPreview] = useState(false);
    const [data,setData] = useState(Data);
    const [checkout,setCheckout] = useState(false);

    useEffect(()=>{
        generateStub();
    },[data])

    const handleInput = (e) => {
        var id = e.target.id;
        var value = e.target.value;
        setData({...data,[id]:value});
        
        
    }

    const downloadPdf = () => {

    setCheckout(true);
    
    }



    const generateStub = () => {
        document.getElementById('template_1').style.display = 'block';
        html2canvas(document.querySelector('#template_1')).then(function(canvas) {
            const imgData = canvas.toDataURL('image/png');
            document.getElementById('previewImage').src = imgData;
      })
       
    }

    if (checkout) {
            return (
                <PayWithPayPal />
            )
        }

    return (
        <>
        <Template1 data = {data}/>
        
        <div className="container">
            <h1>Stubmaker</h1>
            <div className="leftCon">
                <label>Company Name</label>
                <input id = 'company_name' type="text" onChange = {handleInput} defaultValue = {data.company_name}/>
                <label>Company Address</label>
                <input id = 'company_address' type="text" onChange = {handleInput}/>
                <label>Company Phone Number</label>
                <input id = 'company_phoneNumber' type="text" onChange = {handleInput}/>
                <label>Company SSN</label>
                <input id = 'company_ssn' type="text" onChange = {handleInput}/>

                <div className="downloadBtn" onClick = {downloadPdf}>
                    Download pdf
                </div>
            </div>
            <div className="rightCon">
                <img id = 'previewImage' src="" alt=""/>
            </div>


        </div>
        </>
    )
}
