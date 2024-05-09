import { getFilteredProducts } from "@/services/api";

export async function SqmGrid({ promise, renderItem }) {
  try {
    const data = await promise();
    
    if (data) {
      return <>{renderItem(data)}</>;
    }

    if (!data) {
      return <div>Error: No se pudo obtener la información</div>;
    }
  } catch (error) {
    // Maneja cualquier error que ocurra al resolver la promesa
    return <div>Error: {error.message}</div>;
  }
}
