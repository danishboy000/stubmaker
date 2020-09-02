import React,{useState,useEffect} from 'react'
import './popup.scss'

export default function index(props) {

    useEffect(()=> {

        var img = document.getElementById('previewImage');
        var popupImage = document.getElementById('popupImage');
        popupImage.src = img.src;

    },[])
    return (
        <div className = 'popup'>
            <div className="side" onClick = {props.close}></div>
            <div className="main" onClick = {(e)=> {e.stopPropagation();e.preventDefault();}}>
                <img id = 'popupImage' src = '' />
            </div>
            
        </div>
    )
}
