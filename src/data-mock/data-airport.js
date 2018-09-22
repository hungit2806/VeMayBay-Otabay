import HaNoi from '../assets/images/location/HaNoi.jpg'
import QuangBinh from '../assets/images/location/QuangBinh.jpg'
import DienBien from '../assets/images/location/DienBien.jpg'
import Pleiku from '../assets/images/location/Pleiku.jpg'
import ThanhHoa from '../assets/images/location/ThanhHoa.jpg'
import QuangNam from '../assets/images/location/TamKy.jpg'
import SaiGon from '../assets/images/location/SaiGon.jpg'
import QuyNhon from '../assets/images/location/QuyNhon.jpg'
import PhuYen from '../assets/images/location/PhuYen.jpg'
import PhuQuoc from '../assets/images/location/PhuQuoc.jpg'
import NhaTrang from '../assets/images/location/NhaTrang.jpg'
import NgheAn from '../assets/images/location/NgheAn.jpg'
import KienGiang from '../assets/images/location/KienGiang.jpg'
import Hue from '../assets/images/location/Hue.jpg'
import HaiPhong from '../assets/images/location/HaiPhong.jpg'
import DaNang from '../assets/images/location/DaNang.jpg'
import DaLat from '../assets/images/location/DaLat.jpg'
import CanTho from '../assets/images/location/CanTho.jpg'
import CaMau from '../assets/images/location/CaMau.jpg'
import BuonMeThuot from '../assets/images/location/BuonMeThuot.jpg'
import ConDao from '../assets/images/location/ConDao.jpg'
export const DataAirport={
    QuocTe:{
    },
    NoiDia:{
        MienBac:{
            HN:{
                Ten:"Hà Nội",
                Ma:"HAN",
                img: HaNoi
                
            },
            HP:{
                Ten:"Hải Phòng",
                Ma:"HPH",
                img: HaiPhong
                
            },
            DB:{
                Ten:"Điện Biên",
                Ma:"DIN",
                img:DienBien
            },
            TH:{
                Ten:"Thanh Hóa",
                Ma:"THD",
                img: ThanhHoa
                
            },
        },
        MienTrung:{
            DH:{
                Ten:"Đồng Hới",
                Ma:"VDH",
                img:QuangBinh
            },
            HU:{
                Ten:"Huế",
                Ma:"HUI",
                img:Hue
            },
            VI:{
                Ten:"Vinh",
                Ma:"VII",
                img:NgheAn
            },
            DN:{
                Ten:"Đà Nẵng",
                Ma:"DAD",
                img:DaNang
               
            },
            CL:{
                Ten: "Quảng Nam",
                Ma:"VCL",
                img:QuangNam
            },
            QN:{
                Ten:"Quy Nhơn",
                Ma:"UIH",
                img:QuyNhon
               
            },
            TH:{
                Ten:"Tuy Hòa",
                Ma:"TBB",
                img:PhuYen
                
            },
            PL:{
                Ten:"Pleiku",
                Ma:"PXU",
                img:Pleiku
                
            },
        },
        MienNam:{
            SG:{
                Ten:"Sài Gòn",
                Ma:"SGN",
                img:SaiGon
               
            },
            NT:{
                Ten:"Nha Trang",
                Ma:"CXR",
                img:NhaTrang
                
            },
            BMT:{
                Ten:"Buôn Mê Thuột",
                Ma:"BMV",
                img:BuonMeThuot
                
            },
            DL:{
                Ten:"Đà Lạt",
                Ma:"DLI",
                img:DaLat
               
            },
            CT:{
                Ten:"Cần Thơ",
                Ma:"VCA",
                img:CanTho
                
            },
            CM:{
                Ten:"Cà Mau",
                Ma:"CAH",
                img:CaMau
                
            },
            CD:{
                Ten:"Côn Đảo",
                Ma:"VCS",
                img:ConDao
                
            },
            PQ:{
                Ten:"Phú Quốc",
                Ma:"PQC",
                img:PhuQuoc
                
            },
            KG:{
                Ten:"Kiên Giang",
                Ma:"VKG",
                img:KienGiang             
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