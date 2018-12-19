import firebase from 'react-native-firebase'

class Helpers{

    static generateCalories(id, peso, estatura, edad, genero, objetivo){
        let indiceMasaCorporal = 0
        let indiceGrasaCorporal = 0
        let masamagra = 0
        let gb = 0
        if(genero == "Male"){
            indiceMasaCorporal = peso / ((estatura/100) * (estatura/100))
            indiceGrasaCorporal = (1.2 * indiceMasaCorporal) +(0.23 * edad) - (10.8*1) - 5.4
            masamagra = ((100 - indiceGrasaCorporal )/100)* peso
            gb = (13.75 * peso) + (5 * estatura) - (6.76 * edad) + 66.5
          
          }else if(genero == "Female"){
            indiceMasaCorporal = peso / ((estatura/100) * (estatura/100))
            indiceGrasaCorporal = (1.2 * indiceMasaCorporal) + (0.23 * edad) - 5.4 
            masamagra = ((100 - indiceGrasaCorporal )/100)* peso
            gb = (9.56 * peso) + (1.85 * estatura) - (4.68 * edad) + 665
            gb = (9.56 * peso) + (1.85 * estatura) - (4.68 * edad) + 665 
          }
    
          switch (objetivo) {
            case "1":
              gb = gb - 200  
              break;
            case "3":
              gb = gb *1.725
              break; 
          }
          Helpers.savePlan(id,estatura,peso,objetivo,gb)
    }
    static saveProfile(age,email,sexo,nombre,password,imageUrl, callback){
        firebase.database().ref('usuarios/').push({
            age: age,
            email: state.email,
            gender: sexo,
            nombre: nombre,
            password: password,
            avatar: imageUrl
          }).then(
            callback(imageUrl)
          )
         
    }

    static savePlan(userid, height, weight, objective, calories,image){
        let path ="usuarios/"+userid+"/planes/"+userid
        return firebase.database().ref(path).set({
            altura: height,
            peso: weight,
            objetivo: objective,
            calorias: calories,
            imagen: image
            
        })
    }
    
    static saveHeight(userid, height, count){
        let path = "usuarios/"+userid+"/plan"+count+"/estatura"
        return firebase.database().ref(path).set(height)
    }

    static saveWeight(userid, weight, count){
        let path = "usuarios/"+userid+"/plan"+count+"/peso"
        return firebase.database().ref(path).set(weight)
    }

    static saveImageUrl(userid, url){
        let path = "usuarios/"+userid+"/avatar"
        return firebase.database().ref(path).set(url) 
    }


    static showAvatar(userid, callback){
        let path = "usuarios/"+userid+"/avatar"
        
        firebase.database().ref(path).on("value", (snapshot)=>{
            let avatarpath=""
            if(snapshot.val()){
                avatarpath = snapshot.val()                
            }else{
                avatarpath = "hola desde showAvatar"
            }
            callback(avatarpath)
        });
    }

   

    static getName(userid, callback){
        let path = "usuarios/"+userid+"/nombre"
        firebase.database().ref(path).on("value", (snapshot) =>{
            let name =""
            if(snapshot.val()){
                name = snapshot.val()
            }
            callback(name)
        });
    }

    static getCalories(userid, callback){
        let path = "usuarios/"+userid+"/planes/"+userid+"/calorias"
        firebase.database().ref(path).on("value", (snapshot) =>{
            let cal =""
            if(snapshot.val()){
                cal = snapshot.val()
            }else{
                cal = 1000
            }
            callback(cal)
        });
    }

    static getAge(userid, callback){
        let path = "usuarios/"+userid+"/age"
        firebase.database().ref(path).on("value", (snapshot)=>{
            let edad = ""
            if(snapshot.val()){
                edad = snapshot.val()
            }
            callback(edad)
        })
    }

    static getEmail(userid, callback){
        let path = "usuarios/"+userid+"/email"
        firebase.database().ref(path).on("value", (snapshot)=>{
            let correo = ""
            if(snapshot.val()){
                correo = snapshot.val()
            }

            callback(correo)
        })
    }

    static getGender(userid,callback){
        let path = "usuarios/"+userid+"/gender"
        firebase.database().ref(path).on("value", (snapshot)=>{
            let genero = ""
            if(snapshot.val()){
                genero = snapshot.val()
            }

            callback(genero)
        })
    }
}

module.exports = Helpers