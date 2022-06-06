import React from "react";
import {
  FiCheck,
  FiPlusSquare,
  FiMinusSquare,
  FiDelete,
} from "react-icons/fi";
import Button from "../../Components/Button";
import DataTable from "../../Components/DataTable";
import Form from "../../Components/Form";

import { Grid } from "../../Components/Grid";
import SubmitButton from "../../Components/InputButton";
import InputField from "../../Components/InputField";
import ModalDialog from "../../Components/ModalDialog";
import PageHeader from "../../Components/PageHeader";
import { GeneralAnime } from "../../shared/types";
import useDescriptionModal from "../../store/descriptionModal/useDescriptionModal/useDescriptionModal";
import useWatching from "../../store/watching/useWatching/useWatching";
import { WatchingAnime } from "../../store/watching/watching.types";



const Watching: React.FC = () => {
  const { 
    fetchWatchingAnimes, 
    postWatchingAnime, 
    editWatchingAnime, 
    deleteWatchingAnime, 
    changeWatchingEp, 
    watchingAnimes 
  } = useWatching();
  const { setDescriptionModal } = useDescriptionModal();
  
  const [openModal, setOpenModal] = React.useState(false);

  const handleSubmit = async (values: GeneralAnime) => {
    postWatchingAnime(1, values);
    setOpenModal(false);
  };

  const handleRemoveAnime = ({ codigo }: WatchingAnime) => {
    deleteWatchingAnime(codigo);
  };

  const handleEditAnime = React.useCallback((anime) => {
    console.log('aqui');
    
    setDescriptionModal({ 
      anime, 
      open: true, 
      onSubmit: (values) => editWatchingAnime(anime.codigo, values) 
    });
  }, [setDescriptionModal, editWatchingAnime]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <PageHeader
          onClick={() => setOpenModal(true)}
          title="Animes watching"
          testPath="watching"
        />
      </Grid>
      <Grid item xs={12}>
        <DataTable
          data={watchingAnimes}
          onRowClick={handleEditAnime}
          columns={[
            {
              name: "name",
              label: "Anime",
            },
            {
              name: "ep_counter",
              label: "Episódio",
            },
            {
              name: "action",
              label: "Edit ep",
              icons: [
                {
                  icon: <FiPlusSquare size={22} />,
                  onClick: ({ codigo, ep_counter }) => changeWatchingEp(codigo, ep_counter + 1),
                },
                {
                  icon: <FiMinusSquare size={22} />,
                  onClick: ({ codigo, ep_counter }) => changeWatchingEp(codigo, ep_counter - 1),
                },
              ],
            },
            {
              name: "action",
              label: "Set ended",
              icons: [
                {
                  icon: <FiCheck size={22} />,
                  onClick: () => alert("set ended"),
                },
              ],
            },
            {
              name: "action",
              label: "",
              removeAction: true,
              icons: [
                {
                  icon: <FiDelete size={22} />,
                  onClick: handleRemoveAnime,
                },
              ],
            },
          ]}
        />
      </Grid>

      <ModalDialog
        title="Adicionar anime"
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Grid container>
          <Grid item xs={12}>
            <Form handleSubmit={handleSubmit}>
              <InputField label="Nome" name="name" />
              <InputField label="Descrição" name="description" />
              <InputField label="Episódio" name="ep_counter" type="number" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "8px",
                  gap: "10px",
                }}
              >
                {/* <Button onClick={() => {}} secondary>
                  Cancelar
                </Button> */}
                <SubmitButton label="Confirmar" />
              </div>
            </Form>
          </Grid>
        </Grid>
      </ModalDialog>
      
    </Grid>
  );
};

export default Watching;
