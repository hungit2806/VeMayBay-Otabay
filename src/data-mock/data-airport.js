export const DataAirport={
    QuocTe:{},
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
            DataAirport.NoiDia.MienBac.HP
        ],
        MienTrung:[
            DataAirport.NoiDia.MienTrung.DN
        ],
        MienNam:[
            DataAirport.NoiDia.MienNam.SG
        ]
    }
}