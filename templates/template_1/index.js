import React from 'react'
import './template_1.scss'

export default function index({data}) {
   
    return (
        <div id = 'template_1' className = 'template1'>
            <div className="head">
                <div className="company">
                    {data.company_logo && <div className="logo"><img src={data.company_logo} alt=""/></div>}
                    <div className="infoCon">
                        <div className="name">{data.company_name}</div>
                        {data.company_address && <div className="address">{data.company_address}{data.company_city && <span> , {data.company_city}</span>}</div>}
                        {data.company_phoneNumber && <div className="phone">{data.company_phoneNumber}</div>}
                        {data.company_ssn && <div className="ssn">{data.company_ssn}</div>}
                    </div>
                    
                </div>
                <div className="heading">
                    Earnings Statment
                </div>
            </div>

            <div className="employee">
                <div className="headings">
                    <div className="name">Employee Name</div>
                    <div className="ssid">Social Securiy ID</div>
                    <div className="id">Employee ID</div>
                    <div className="checkNo">Check No.</div>
                    <div className="record">Pay Record</div>
                    <div className="date">Pay Date</div>
                </div>

                <div className="values">
                    <div className="name">{data.employee_name}</div>
                    <div className="ssid">{data.employee_ssn}</div>
                    <div className="id">{data.employee_id}</div>
                    <div className="checkNo">{data.salary_checkNo}</div>
                    <div className="record"></div>
                    <div className="date">{data.salary_payDate}</div>
                </div>
                
            </div>

            <div className="salary">
                <div className="headings">
                    <div className="earning">Earnings</div>
                    <div className="rate">Rates</div>
                    <div className="hour">Hours</div>
                    <div className="current_1">Current</div>
                    <div className="deductions">Deductions</div>
                    <div className="current_2">Current</div>
                    <div className="yearToDate">Year to Date</div>
                </div>

                <div className="values">
                    <div className="earning">Earnings</div>
                    <div className="rate">Rates</div>
                    <div className="hour">Hours</div>
                    <div className="current_1">Current</div>
                    <div className="deductions">Deductions</div>
                    <div className="current_2">Current</div>
                    <div className="yearToDate">Year to Date</div>
                </div>
                
            </div>

            <div className="result">
                <div className="headings">
                    <div className="ygross">YTD Gross</div>
                    <div className="yDeductions">YTD Deductions</div>
                    <div className="yNet">YTD Net Pay</div>
                    <div className="total">Current Total</div>
                    <div className="deductions">Cur. Deductions</div>
                    <div className="net">Net Pay</div>
                    
                </div>

                <div className="values">
                    <div className="ygross">YTD Gross</div>
                    <div className="yDeductions">YTD Deductions</div>
                    <div className="yNet">YTD Net Pay</div>
                    <div className="total">Current Total</div>
                    <div className="deductions">Cur.Deductions</div>
                    <div className="net">Net Pay</div>
                </div>
                
            </div>

            <div id = 'waterMark' className="waterMark">
                <img src="/watermark.png" alt=""/>
            </div>
            
        </div>
    )
}
