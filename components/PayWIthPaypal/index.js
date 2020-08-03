import React, { useState, useEffect, useRef } from 'react'

function PayWithPayPal (props) {

    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);
    const paypalRef = useRef();

    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            description: 'StubMaker checkout',
                            amount: {
                                currency_code: 'USD',
                                value: 10.00,
                            }
                        }]
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
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
                    setPaidFor(true);
                    
                },
                onError: err => {
                    setError(err);
                    console.error('ERROR', err);
                },
            })
            .render(paypalRef.current);
    },[]);

    if (paidFor) {
        return (
            <div>
                Thanks for making the purchase.
            </div>
        )
    }

    if (error) {
        return (
            <div>
                Error in processing order. Please Retry again
            </div>
        )
    }

    return (
        <div>
           
            <div>Total - $10</div>
            <div ref={paypalRef} />
        </div>
    )
}

export default PayWithPayPal