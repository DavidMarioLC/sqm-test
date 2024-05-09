// Agregar o eliminar un valor específico de un
// parámetro dado en la URL actual en el navegador cliente
export const toggleParamValue = (param, value, router) => {
  const params = new URLSearchParams(window.location.search);

  // Obtener los valores actuales del parámetro especificado
  const currentParamValues = params.getAll(param)[0];
  const separateParamValues = !currentParamValues
    ? []
    : currentParamValues.split(",");

  // Verificar si el valor ya está presente en los valores actuales
  const paramHasValue = separateParamValues.includes(value);

  !paramHasValue
    ? addValueToParam(param, value, params, separateParamValues)
    : removeValueFromParam(param, value, params, separateParamValues);

    router.push(`?${params.toString()}`);
};

// Función para agregar un valor al parámetro
export const addValueToParam = (param, newValue, params, values) => {
  params.set(param, [...values, newValue].join(","));
};

// Función para remover un valor del parámetro
export const removeValueFromParam = (param, valueToRemove, params, values) => {
  const filteredValues = values.filter((valuee) => valuee !== valueToRemove);

  filteredValues.length
    ? params.set(param, filteredValues.join(","))
    : params.delete(param);
};
