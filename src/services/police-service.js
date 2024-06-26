import axios from "axios";

const http = axios.create({
    baseURL: 'https://citysos-apis.onrender.com'
});

export class PoliceService {
    registerPolice(username, firstName, lastName, email, password, phoneNumber, dni, deviceToken, assignedDistrict, policeRank, policeIdentifier, entityPolice) {
        return http.post('/api/v1/auth/register-police', {
            username: username,
            firstname: firstName,
            lastname: lastName,
            email: email,
            password: password,
            phoneNumber: phoneNumber,
            dni: dni,
            deviceToken: deviceToken,
            assignedDistrict: assignedDistrict,
            policeRank: policeRank,
            policeIdentifier: policeIdentifier,
            entityPolice: entityPolice
        })
    }
}