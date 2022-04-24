export default function validation(estado,setError,error){
    const number = /\d\d?\d?/;
    const regex = /^[A-Z]+$/i;
    const {nombre,vida,fuerza,defensa,velocidad,altura,peso} = estado;
    if(!regex.test(nombre)) setError({...error,name:"no puede tener numeros ni simbolos"}); else error.name && setError({});
    if(number.test(vida)&&vida<0||vida>100) setError({...error,vida:"la vida tiene que estar entre 0 y 100 excluidos"}); else error.vida&&setError({});
    if(fuerza<0||fuerza>100) setError({...error,fuerza:"la fuerza tiene que estar entre 0 y 100 excluidos"}); else error.fuerza&&setError({});
    if(defensa<0||defensa>100) setError({...error,defensa:"la defensa tiene que estar entre 0 y 100 excluidos"}); else error.defensa&&setError({});
    if(velocidad<0||velocidad>100) setError({...error,velocidad:"la velocidad tiene que estar entre 0 y 100 excluidos"}); else error.velocidad&&setError({});
    if(peso<0||peso>100) setError({...error,peso:"la peso tiene que estar entre 0 y 100 excluidos"}); else error.peso&&setError({});
    if(altura<0||altura>100) setError({...error,altura:"la altura tiene que estar entre 0 y 100 excluidos"}); else error.altura&&setError({});
}


