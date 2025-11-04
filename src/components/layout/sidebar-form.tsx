import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactNode } from "react";

type SideBarFormProps = {
  title: string;
  children: ReactNode;
  onSave?: () => void;
  loading: boolean;
};

export function SidebarForm({ 
    title,
    children,
    onSave,
    loading
}: SideBarFormProps) {
    const navigate = useNavigate();
    const location = useLocation();

    function handleCloseForm(open: boolean) {
        if (!open) {
            const currentPath = location.pathname;
            const newPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
            navigate(newPath);
        }
    }
  return (
    <Sheet open={true} onOpenChange={handleCloseForm}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>
            Preencha os campos abaixo e clique em Salvar
          </SheetDescription>
        </SheetHeader>

      <div className="px-8">
        {children}
      </div>

        <SheetFooter>
          <div className="flex flex-row gap-1">
            <Button type="button" onClick={onSave} disabled={loading}>
                Salvar
            </Button>

            <SheetClose asChild>
              <Button
              variant='outline'>
                Cancelar
              </Button>
            </SheetClose>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}