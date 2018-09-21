export const DataAirport={
    QuocTe:{
    },
    NoiDia:{
        MienBac:{
            HN:{
                Ten:"Hà Nội",
                Ma:"HAN",
                
            },
            HP:{
                Ten:"Hải Phòng",
                Ma:"HPH",
                
            },
            DB:{
                Ten:"Điện Biên",
                Ma:"DIN",
                
            },
            TH:{
                Ten:"Thanh Hóa",
                Ma:"THD",
                
            },
        },
        MienTrung:{
            DH:{
                Ten:"Đồng Hới",
                Ma:"VDH",
                
            },
            HU:{
                Ten:"Huế",
                Ma:"HUI",
                
            },
            VI:{
                Ten:"Vinh",
                Ma:"VII",
                
            },
            DN:{
                Ten:"Đà Nẵng",
                Ma:"DAD",
               
            },
            CL:{
                Ten: "Quảng Nam",
                Ma:"VCL"
            },
            QN:{
                Ten:"Quy Nhơn",
                Ma:"UIH",
               
            },
            TH:{
                Ten:"Tuy Hòa",
                Ma:"TBB",
                
            },
            PL:{
                Ten:"Pleiku",
                Ma:"PXU",
                
            },
        },
        MienNam:{
            SG:{
                Ten:"Sài Gòn",
                Ma:"SGN",
               
            },
            NT:{
                Ten:"Nha Trang",
                Ma:"CXR",
                
            },
            BMT:{
                Ten:"Buôn Mê Thuột",
                Ma:"BMV",
                
            },
            DL:{
                Ten:"Đà Lạt",
                Ma:"DLI",
               
            },
            CT:{
                Ten:"Cần Thơ",
                Ma:"VCA",
                
            },
            CM:{
                Ten:"Cà Mau",
                Ma:"CAH",
                
            },
            CD:{
                Ten:"Côn Đảo",
                Ma:"VCS",
                
            },
            PQ:{
                Ten:"Phú Quốc",
                Ma:"PQC",
                
            },
            KG:{
                Ten:"Kiên Giang",
                Ma:"VKG",
                
            },
        }
    }
}
export const RelationshipAirport={
    HAN:{
        MienBac:[
            DataAirport.NoiDia.MienBac.DB,
        ],
        MienTrung:[
            DataAirport.NoiDia.MienTrung.VI,
            DataAirport.NoiDia.MienTrung.TH,
            DataAirport.NoiDia.MienTrung.PL,
            DataAirport.NoiDia.MienTrung.DH,
            DataAirport.NoiDia.MienTrung.HU,
            DataAirport.NoiDia.MienTrung.DN,
            DataAirport.NoiDia.MienTrung.QN,
            DataAirport.NoiDia.MienTrung.CL
        ],
        MienNam:[
            DataAirport.NoiDia.MienNam.DL,
            DataAirport.NoiDia.MienNam.PQ,
            DataAirport.NoiDia.MienNam.SG,
            DataAirport.NoiDia.MienNam.CT,
            DataAirport.NoiDia.MienNam.BMT,
            DataAirport.NoiDia.MienNam.NT
        ]
    },
    HPH:{
        MienBac:[
        ],
        MienTrung:[
            DataAirport.NoiDia.MienTrung.DN,
            DataAirport.NoiDia.MienTrung.PL
        ],
        MienNam:[
            DataAirport.NoiDia.MienNam.SG,
            DataAirport.NoiDia.MienNam.BMT,
            DataAirport.NoiDia.MienNam.NT,
            DataAirport.NoiDia.MienNam.PQ,
            DataAirport.NoiDia.MienNam.DL
        ]
    },
    DIN:{
        MienBac:[
            DataAirport.NoiDia.MienBac.HN
        ],
        MienTrung:[           
        ],
        MienNam:[
        ]
    },
    THD:{
        MienBac:[            
        ],
        MienTrung:[           
        ],
        MienNam:[
            DataAirport.NoiDia.MienNam.SG,
            DataAirport.NoiDia.MienNam.PQ,
            DataAirport.NoiDia.MienNam.BMT,
            DataAirport.NoiDia.MienNam.NT
        ]
    },
    VII:{
        MienBac:[
            DataAirport.NoiDia.MienBac.HN,            
        ],
        MienTrung:[  
            DataAirport.NoiDia.MienTrung.DN,
            DataAirport.NoiDia.MienTrung.PL,         
        ],
        MienNam:[
            DataAirport.NoiDia.MienNam.SG,
            DataAirport.NoiDia.MienNam.DL,
            DataAirport.NoiDia.MienNam.BMT,
            DataAirport.NoiDia.MienNam.NT
        ]
    },
    HUI:{
        MienBac:[
            DataAirport.NoiDia.MienBac.HN,            
        ],
        MienTrung:[        
        ],
        MienNam:[
            DataAirport.NoiDia.MienNam.SG,
            DataAirport.NoiDia.MienNam.DL,
            DataAirport.NoiDia.MienNam.PQ,
            DataAirport.NoiDia.MienNam.NT
        ]
    },
    VDH:{
        MienBac:[
            DataAirport.NoiDia.MienBac.HN,            
        ],
        MienTrung:[        
        ],
        MienNam:[
            DataAirport.NoiDia.MienNam.SG,
            DataAirport.NoiDia.MienNam.BMT,
        ]
    },
    DAD:{
        MienBac:[
            DataAirport.NoiDia.MienBac.HN,
            DataAirport.NoiDia.MienBac.HP,            
        ],
        MienTrung:[ 
            DataAirport.NoiDia.MienTrung.PL,
            DataAirport.NoiDia.MienTrung.VI,       
        ],
        MienNam:[
            DataAirport.NoiDia.MienNam.SG,
            DataAirport.NoiDia.MienNam.BMT,
            DataAirport.NoiDia.MienNam.DL,
            DataAirport.NoiDia.MienNam.NT,
            DataAirport.NoiDia.MienNam.PQ,
            DataAirport.NoiDia.MienNam.CT,
        ]
    },
    PXU:{
        MienBac:[
            DataAirport.NoiDia.MienBac.HN,
            DataAirport.NoiDia.MienBac.HP,            
        ],
        MienTrung:[ 
            DataAirport.NoiDia.MienTrung.DN,
            DataAirport.NoiDia.MienTrung.VI,       
        ],
        MienNam:[
            DataAirport.NoiDia.MienNam.SG,
        ]
    },
    TBB:{
        MienBac:[
            DataAirport.NoiDia.MienBac.HN,          
        ],
        MienTrung:[      
        ],
        MienNam:[
            DataAirport.NoiDia.MienNam.SG,
        ]
    },
    SGN:{
        MienBac:[
            DataAirport.NoiDia.MienBac.HN,
            DataAirport.NoiDia.MienBac.HP,   
            DataAirport.NoiDia.MienBac.TH,         
        ],
        MienTrung:[ 
            DataAirport.NoiDia.MienTrung.PL,
            DataAirport.NoiDia.MienTrung.VI, 
            DataAirport.NoiDia.MienTrung.TH,
            DataAirport.NoiDia.MienTrung.DH,
            DataAirport.NoiDia.MienTrung.HU,
            DataAirport.NoiDia.MienTrung.DN,
            DataAirport.NoiDia.MienTrung.QN,
            DataAirport.NoiDia.MienTrung.CL,      
        ],
        MienNam:[
            DataAirport.NoiDia.MienNam.KG,
            DataAirport.NoiDia.MienNam.BMT,
            DataAirport.NoiDia.MienNam.DL,
            DataAirport.NoiDia.MienNam.NT,
            DataAirport.NoiDia.MienNam.PQ,
            DataAirport.NoiDia.MienNam.CD,
            DataAirport.NoiDia.MienNam.CM,
        ]
    },
    CXR:{
        MienBac:[
            DataAirport.NoiDia.MienBac.HN,
            DataAirport.NoiDia.MienBac.HP,   
            DataAirport.NoiDia.MienBac.TH,         
        ],
        MienTrung:[ 
            DataAirport.NoiDia.MienTrung.VI, 
            DataAirport.NoiDia.MienTrung.HU,
            DataAirport.NoiDia.MienTrung.DN,     
        ],
        MienNam:[
            DataAirport.NoiDia.MienNam.SG,
        ]
    },
    PQC:{
        MienBac:[
            DataAirport.NoiDia.MienBac.HN,
            DataAirport.NoiDia.MienBac.HP,  
            DataAirport.NoiDia.MienBac.TH,         
        ],
        MienTrung:[ 
            DataAirport.NoiDia.MienTrung.HU,
            DataAirport.NoiDia.MienTrung.DN,     
        ],
        MienNam:[
            DataAirport.NoiDia.MienNam.SG,
            DataAirport.NoiDia.MienNam.CT,
            DataAirport.NoiDia.MienNam.KG,
        ]
    },
    VCL:{
        MienBac:[
            DataAirport.NoiDia.MienBac.HN,         
        ],
        MienTrung:[      
        ],
        MienNam:[
            DataAirport.NoiDia.MienNam.SG,
            DataAirport.NoiDia.MienNam.BMT,
        ]
    },
    UIH:{
        MienBac:[
            DataAirport.NoiDia.MienBac.HN,         
        ],
        MienTrung:[      
        ],
        MienNam:[
            DataAirport.NoiDia.MienNam.SG,
        ]
    },
    VCA:{
        MienBac:[
            DataAirport.NoiDia.MienBac.HN,         
        ],
        MienTrung:[  
            DataAirport.NoiDia.MienTrung.DN,    
        ],
        MienNam:[
            DataAirport.NoiDia.MienNam.DL,
            DataAirport.NoiDia.MienNam.CD,
            DataAirport.NoiDia.MienNam.PQ,
        ]
    },
    VCS:{
        MienBac:[       
        ],
        MienTrung:[     
        ],
        MienNam:[
            DataAirport.NoiDia.MienNam.SG,
            DataAirport.NoiDia.MienNam.CT,
        ]
    },
    BMV:{
        MienBac:[
            DataAirport.NoiDia.MienBac.HN,   
            DataAirport.NoiDia.MienBac.TH,  
            DataAirport.NoiDia.MienBac.HP,        
        ],
        MienTrung:[  
            DataAirport.NoiDia.MienTrung.DN,   
            DataAirport.NoiDia.MienTrung.VI,  
            DataAirport.NoiDia.MienTrung.DH,
            DataAirport.NoiDia.MienTrung.CL,    
        ],
        MienNam:[
            DataAirport.NoiDia.MienNam.SG,
        ]
    },
    VKG:{
        MienBac:[     
        ],
        MienTrung:[    
        ],
        MienNam:[
            DataAirport.NoiDia.MienNam.SG,
            DataAirport.NoiDia.MienNam.PQ,
        ]
    },
    CAH:{
        MienBac:[     
        ],
        MienTrung:[    
        ],
        MienNam:[
            DataAirport.NoiDia.MienNam.SG,
        ]
    },  
}