//rest operator
//spread and rest operator both use triple dots ... 
//but where it will use that define is it spread or rest

function myFunc(a, ...params){
    console.log(a);
    console.log(params);//a = 2 and params = [3, 4]
};
myFunc(2, 3, 4);