//should you use if(response) or if(response!== null) in test assertions?

//Answer: Use if(response!== null) since it catches both null and undefined.
//If we use if(response) then it will fail for 0, "" and false values as well which might be valid responses in API.