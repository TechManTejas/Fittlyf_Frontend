import { Refs } from "../Hooks/Refs";

export const page1SetInitialValue = (page1Data) => {
    if (page1Data) {
        Refs.emailPhoneNumber.current.value = page1Data.emailPhoneNumber;
        Refs.emailMe.current.value = page1Data.emailMe;
        Refs.country.current.value = page1Data.country;
        Refs.firstName.current.value = page1Data.firstName;
        Refs.lastName.current.value = page1Data.lastName;
        Refs.address.current.value = page1Data.address;
        Refs.apartmentAndOthers.current.value = page1Data.apartmentAndOthers;
        Refs.city.current.value = page1Data.city;
        Refs.zip.current.value = page1Data.zip;
        Refs.saveThis.current.checked = page1Data.saveThis;
        Refs.state.current.value = page1Data.state;
        Refs.PhoneNumber.current.value = page1Data.PhoneNumber;
    }
}