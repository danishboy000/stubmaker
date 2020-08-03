import '../public/html2canvas.min.js'
import React,{useState,useEffect} from 'react'
import Data from '../data'
import Template1 from '../templates/template_1'
import dynamic from 'next/dynamic'


export default function index() {

    const [preview,setPreview] = useState(false);
    const [data,setData] = useState(Data);
    

    useEffect(()=>{
        generateStub();
    },[data])

    const handleInput = (e) => {
        var id = e.target.id;
        var value = e.target.value;
        setData({...data,[id]:value});
        
        
    }

    const downloadPdf = () => {
        var temp = document.getElementById('template_1');
        temp.style.display = 'block';
        var widthT = temp.clientWidth - 450;
        var heightT = temp.offsetHeight - 250;
       
        document.getElementById('waterMark').style.display = 'none';
        html2canvas(document.querySelector('#template_1')).then(function(canvas) {
            const imgData = canvas.toDataURL('image/png');
            
            var pdf = new jsPDF("l", "px",[widthT,heightT]);

            var width = pdf.internal.pageSize.getWidth();
            var height = pdf.internal.pageSize.getHeight();
            pdf.addImage(imgData, 'png', 0, 0,width,height);
            pdf.save("download.pdf");

            document.getElementById('template_1').style.display = 'none';
            document.getElementById('waterMark').style.display = 'block';
      })
    }


    const generateStub = () => {
        document.getElementById('template_1').style.display = 'block';
        html2canvas(document.querySelector('#template_1')).then(function(canvas) {
            const imgData = canvas.toDataURL('image/png');
            document.getElementById('previewImage').src = imgData;
      })
       
    }

    return (
        <>
        <Template1 data = {data}/>
        <div className="container">
            <div className="leftCon">
                <label>Company Name</label>
                <input id = 'company_name' type="text" onChange = {handleInput}/>
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
