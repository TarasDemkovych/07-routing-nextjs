import NotePreviewClient from "./NotePreview.client";

type Props = {
  params: { id: string };
};

const NoteDetails = async ({ params }: Props) => {
  const { id } =  params;

  return <NotePreviewClient id={id} />;
};

export default NoteDetails;