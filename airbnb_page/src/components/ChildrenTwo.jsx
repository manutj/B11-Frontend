const ChildrenTwo = (allProps) => {
    const { onChange } = allProps;

    //Enviamos el valor del input a la funcion callback del componente padre (Children)
    const handleChange = (e) => {
        onChange(e.target.value);
    };
    return (
        <div>
            <p>{allProps.one}</p>
            <p>{allProps.two}</p>
            <p>{allProps.three}</p>
            <p>{allProps.four}</p>

            <input name="text" onChange={handleChange} />
        </div>
    );
};

export { ChildrenTwo };
