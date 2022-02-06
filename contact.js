class Contact
{
    get FullName()
    {
        return this._fullName;

    }
    set FullName(full_name)
    {
        this._fullname = full_name;


    } 
    get ContactNumber()
    {
        return this._contact_number;


    }
    set ContactNumber(contact_number)
    {
        this._contactNumber= contact_number;


    }
    get EmailAddress()
    {
        return this._emailAddress;


    }
    set EmailAddress(email_address)
    {
        this._emailAddress= email_address;


    } 
    constructor(fullName, contactNumber, emailAddress)
    {
        this._FullName = fullName;
        this._ContactNumber = contactNumber;
        this._EmailAddress = emailAddress;

    }
    tostring()
    {
        return `Full Name: ${this.FullName}\n Contact Number: ${this.ContactNumber}\n Email Addrress: ${this.EmailAddress}`;

    }
}