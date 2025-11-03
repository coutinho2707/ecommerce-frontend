import { useBrandById } from "@/cases/brands/hooks/use-brand";
import { SidebarForm } from "@/components/layout/sidebar-form";
import { useParams } from "react-router-dom";

export function BrandForm() {
    const {id} = useParams<{id: string}>();
    const { data, isLoading} = useBrandById(id ?? '')

    function handleSave(){

    }
    return (
        <SidebarForm
         title="Cadastro de Marca"
         onSave={handleSave}
        >
         {isLoading ? (
            <h4>Carregando</h4>
         ):(
            <p>
                {JSON.stringify(data)}
            </p>
         )}
        </SidebarForm>
    )
}
