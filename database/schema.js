import Realm from 'realm';

//Definimos los nombres de las tablas a crear
export const PROFILE_SCHEMA = "Profile";
export const SESSION_SCHEMA = "Session";

//definimos las tablas a crear
export const ProfileSchema = {
    name: PROFILE_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'int',
        name: 'string',
        gender: 'string',
        lastName: 'string',
        height: 'double',
        weight: 'double',
        imc: 'double',
        fatAverage: 'double',
        conditionLevel: 'int',
        bodyType: 'string',
        picture: 'data'
    }
}

export const SessionSchema = {
    name: SESSION_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'int',
        usser: 'string',
        password: 'string',
        
    }
}