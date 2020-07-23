import React,{useState,useEffect} from 'react'
import AwesomeAlert from 'react-native-awesome-alerts'

interface AlertInterface{
    title:string,
    message:string,
    textBtn1:string,
    textBtn2:string,
    funcBtn1(): void,
    show:boolean
}


const CustomAlert = (valeu:AlertInterface) => {
    // const [showAlert,setShowALert] = useState(true)

    // useEffect(()=>{
    //     setShowALert(valeu.show)
    // },[])
    return (
        <AwesomeAlert
          show={true}
          showProgress={false}
          title="AwesomeAlert"
          message="I have a message for you!"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="Yes, delete it"
          confirmButtonColor="#DD6B55"
          onCancelPressed={() => {
            //setShowALert(false)
          }}
          onConfirmPressed={() => {
            valeu.funcBtn1()
          }}
        />
    )
}

export default CustomAlert