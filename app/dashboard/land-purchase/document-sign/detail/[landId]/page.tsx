import getLandById from '../../../../../actions/getLandById';
import DocumentSign from './DocumentSign';

interface IDocumentSignPageParams {
  landId?: string;
}
const DocumentSignPage = async ({
  params,
}: {
  params: IDocumentSignPageParams;
}) => {
  const land = await getLandById(params);
  return <DocumentSign land={land} />;
};

export default DocumentSignPage;
