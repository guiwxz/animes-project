import React from 'react';
import DescriptionModal from '../../../Components/DescriptionModal';
import { WatchingAnime } from '../../watching/watching.types';
import { DefaultDescriptionModal, DescriptionModalContextSchema } from '../descriptionModal.types';


export const DescriptionModalContext = React.createContext<DescriptionModalContextSchema>(
  {} as DescriptionModalContextSchema
);

const DescriptionModalProvider: React.FC = ({ children }) => {

  const defaultDescription: DefaultDescriptionModal = React.useMemo(() => ({ 
    anime: null,
    open: false,
    onSubmit: () => {},
  }), []);

  const [descriptionModal, setDescriptionModal] = React.useState<DefaultDescriptionModal>(defaultDescription);
  const [editDescription, setEditDescription] = React.useState(false);

  const handleSubmit = React.useCallback((anime: WatchingAnime) => {
    descriptionModal.onSubmit(anime);
    setDescriptionModal(current => ({
      ...current,
      anime: {
        ...current.anime,
        description: anime.description,
        name: anime.name,
      }
    }));
    setEditDescription(false);

  }, [descriptionModal]);

  return (
    <DescriptionModalContext.Provider value={{
      setDescriptionModal,
    }}>
      <DescriptionModal 
        defaultDescription={defaultDescription}
        descriptionModal={descriptionModal}
        setDescriptionModal={setDescriptionModal}
        handleSubmit={handleSubmit}
        editDescription={editDescription}
        setEditDescription={setEditDescription}
      />
      {children}
    </DescriptionModalContext.Provider>
  );
} 

export default DescriptionModalProvider;