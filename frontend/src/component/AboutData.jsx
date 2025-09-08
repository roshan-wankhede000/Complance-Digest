import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { InsuranceContext } from '../context/InsuranceContextFile'

function AboutData() {
        let {url} = useContext(InsuranceContext)
    let [data, setData] = useState([])

    async function aboutData() {

        try {
            let res = await axios.get(`${url}/get-aboutdata`)
            setData(res.data.data)
        } catch (err) {
            console.error("Error fetching about data:", err)
        }
    }
    console.log(data);

    useEffect(() => {
        aboutData()
    }, [])

    if (data.length == 0) {
        return(
            <>
            <h1 className='text-danger my-5 d-flex justify-content-center'>No Data Found!...</h1>
            </>
        )
    }else{
            return (
        <>
            <div className="container">
                <h4 className="text-primary mt-3">This section provides detailed information about insurance companies and coverage details. You can also view and download related data files for further analysis.</h4>
                <div className="row my-5">
                    {
                        data.map((item) => (
                            <div className="col-md-2">
                                <div class="card shadow rounded-3" style={{ maxWidth: '500px' }}>
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between align-items-start">
                                            <p class="mb-1">
                                                {item.desc}
                                            </p>
                                        </div>

                                        <div class="d-flex gap-2 flex-wrap my-3">
                                            <a href={`http://localhost:8000/uploads/${item.csvfile}`} class="btn btn-outline-primary" title="Download File" target="_self" >
                                               <i class="bi bi-filetype-xlsx"></i> Download 
                                            </a>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
    }
}

export default AboutData