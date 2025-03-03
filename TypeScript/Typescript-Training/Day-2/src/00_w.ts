// // Discriminant union

// // Type Restriction

// // Dynamic typing

// // use case





// // Product--> superset

// type Product = {

//     id:number
  
//     price:number
  
//     typeOfProd: 'ELECTROCNICS' | 'FRAGNACE'
  
  
  
//   } & TV | Fragance
  
  
  
  
  
//   type TV = {
  
//     typeOfProd: 'ELECTROCNICS'
  
//     screenSize: number
  
//     maxVol: number
  
//   }
  
  
  
//   type Fragance = {
  
//     typeOfProd:'FRAGNACE'
  
//     baseTime: number
  
//     volumner:string
  
//   }
  
  
  
                    
  
//   const samsung:Product = {
  
//     typeOfProd:'FRAGNACE',
  
//     baseTime:12,
  
//     volumner:'sdf'
  
//   }
  
  
  
  
  
//   type Aditya = {
  
//     name:'Aditya'
  
//   }
  
  
  
//   interface Man {
  
//     hiehgt:number
  
//     weight:number
  
//   }
  
  
  
//   interface Arun extends Man {
  
//     name:'ARUN'
  
//   }
  
  
  
//   interface Man {
  
//     roll:number
  
//   }
  
  
  
//   //&nbsp; type restirction
  
//   // const obj = {
  
//   //&nbsp;&nbsp; name:'Aditya',
  
//   //&nbsp;&nbsp; roll:12,
  
//   //&nbsp;&nbsp; shouldGiveExam:true
  
  
  
//   // }
  
  
  
//   function genrateor<T extends boolean,C = T extends true ? 'Can give exam':'can not give exam' >(key:T,should:C ){
  
  
  
//   }
  
  
  
//   genrateor(true,'')
  
  
  
  
  
//   type Parms = {
  
//     status:'ACTIVE' |'DELETED'
  
//   }
  
  
  
//   type ActiveResponse = {
  
//     name:'Aditya';
  
//   }
  
//   type DeletedResponse = {
  
//     tab:'Aditya';
  
//   }
  
  
  
//   // function nodeGenrator<T extends Parms['status']>(key:T):T extends 'ACTIVE' ? ActiveResponse :DeletedResponse{
  
//   //   return 'data';
  
//   // }
  
  
  
  
  
//   // const daata = nodeGenrator('ACTIVE')