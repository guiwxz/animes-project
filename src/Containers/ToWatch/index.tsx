import React from 'react';
import { FiDelete } from 'react-icons/fi';
import Button from '../../Components/Button';
import DataTable from '../../Components/DataTable';
import Form from '../../Components/Form';
import { Grid } from '../../Components/Grid';
import SubmitButton from '../../Components/InputButton';
import InputField from '../../Components/InputField';
import ModalDialog from '../../Components/ModalDialog';
import PageHeader from '../../Components/PageHeader';
import { GeneralAnime } from '../../shared/types';
import useDescriptionModal from '../../store/descriptionModal/useDescriptionModal/useDescriptionModal';
import useToWatch from '../../store/toWatch/useToWatch';

const ToWatch: React.FC = () => {
  const { 
    toWatchAnimes,
    postToWatchAnime,
    deleteToWatchAnime,
    editToWatchAnime
  } = useToWatch();

  const { setDescriptionModal } = useDescriptionModal();

  const [openModal, setOpenModal] = React.useState(false);
  console.log(toWatchAnimes);

  const handleSubmit = React.useCallback((anime: GeneralAnime) => {
    postToWatchAnime(1, anime);
    setOpenModal(false);
  }, []);

  const handleEditAnime = React.useCallback((anime) => {
    
    setDescriptionModal({ 
      anime, 
      open: true, 
      onSubmit: (values) => editToWatchAnime(anime.codigo, values) 
    });
  }, [setDescriptionModal, editToWatchAnime]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <PageHeader
          onClick={() => setOpenModal(true)}
          title="Animes to watch"
        />
      </Grid>
      <Grid xs={12}>
        <DataTable 
          data={toWatchAnimes}
          columns={[
            {
              name: 'name',
              label: 'Anime'
            },
            {
              name: 'action',
              label: '',
              removeAction: true,
              icons: [
                {
                  icon: <FiDelete size={22} />,
                  onClick: ({ codigo }) => deleteToWatchAnime(codigo)
                }
              ]
            }
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "8px",
                  gap: "10px",
                }}
              >
                <Button onClick={() => {}} secondary>
                  Cancelar
                </Button>
                <SubmitButton label="Confirmar" />
              </div>
            </Form>
          </Grid>
        </Grid>
      </ModalDialog>
    </Grid>
  );
}

export default ToWatch;