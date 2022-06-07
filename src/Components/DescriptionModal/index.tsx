import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { colorPalette } from '../../config/colorPalette';
import { DefaultDescriptionModal } from '../../store/descriptionModal/descriptionModal.types';
import Button from '../Button';
import Form from '../Form';
import { Grid } from '../Grid';
import SubmitButton from '../InputButton';
import InputField from '../InputField';
import ModalDialog from '../ModalDialog';

interface DescriptionModalProps {
  descriptionModal: DefaultDescriptionModal;
  setDescriptionModal: React.Dispatch<React.SetStateAction<DefaultDescriptionModal>>;
  defaultDescription: DefaultDescriptionModal;
  handleSubmit(anime: any): void;
  editDescription: boolean;
  setEditDescription: React.Dispatch<React.SetStateAction<boolean>>;
}

const DescriptionModal: React.FC<DescriptionModalProps> = ({
  descriptionModal,
  setDescriptionModal,
  defaultDescription,
  handleSubmit,
  editDescription,
  setEditDescription,
}) => (

  <ModalDialog
    title={descriptionModal.anime?.name}
    open={descriptionModal.open}
    onClose={() => {
      setDescriptionModal(defaultDescription); 
      setEditDescription(false);
    }}
  >
    <Grid container>
      <Grid item xs={12}>
        <Form handleSubmit={handleSubmit}>
          <div style={{ padding: '10px', border: `1px solid ${colorPalette.primary[500]}`, borderRadius: '5px' }}>
            {editDescription ? (
              <>
                <InputField id="nomeEditar" label="Nome" name="name" defaultValue={descriptionModal.anime?.name} />
                <InputField id="descricaoEditar" label="Descrição" name="description" defaultValue={descriptionModal.anime?.description} textArea />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "8px",
                    gap: "10px",
                  }}
                >
                  <Button onClick={() => setEditDescription(false)} secondary>
                    Cancelar
                  </Button>
                  <SubmitButton label="Confirmar" />
                </div>
              </>
            ) : (
              <>
                <div style={{color: `${colorPalette.primary[500]}`, fontSize: '12px', height: '30px'}}>
                  Descrição
                </div>
                <div style={{ minHeight: '50px' }}>
                  <div style={{ fontSize: '14px', lineHeight: '20px' }}>
                    {descriptionModal?.anime?.description.length > 0 ? (
                      descriptionModal.anime.description
                    ) : (
                      ''
                    )}
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignContent: 'flex-end', marginTop: '20px' }}>
                      <FiEdit id='editButton' onClick={() => setEditDescription(true)} size="18px" style={{ cursor: 'pointer' }} />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </Form>
      </Grid>
    </Grid>
  </ModalDialog>
);

export default DescriptionModal;