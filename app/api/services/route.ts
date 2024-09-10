import { format } from 'date-fns';
import { NextResponse } from 'next/server';
import getCurrentUser from '../../actions/getCurrentUser';

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  //transactions
  // - upsert a Landservice matching serviceProviderId, serviceProvided, landId and get service Id
  // -

  const body = await request.json();
  const {
    landId,
    serviceProviderId,
    toBeCompletedOn,
    completedOn,
    serviceProvided,
    serviceStatus,
    imageSrc,
    documentSrc,
  } = body;

  let service, error;
  if (prisma) {
    await prisma
      .$transaction(async (tx) => {
        service = await tx.landService.upsert({
          where: {
            landId_serviceProviderId_serviceProvided: {
              landId,
              serviceProviderId,
              serviceProvided,
            },
          },
          create: {
            landId,
            serviceProviderId,
            toBeCompletedOn: new Date(toBeCompletedOn),
            completedOn: new Date(completedOn),
            serviceProvided,
            serviceStatus,
          },
          update: {},
        });
        if (!service.id) {
          throw new Error(`Service creation failed`);
        }
        const serviceId = service.id;
        const landImageBody = imageSrc?.map((image: string) => ({
          title: `${serviceProvided} - ${format(new Date(), 'yyyy-MM-dd')}`,
          imageSrc: image,
          alt: `${serviceProvided} - ${format(new Date(), 'yyyy-MM-dd')}`,
          landId: landId,
          uploaderId: currentUser.id,
          serviceId: serviceId,
        }));
        const landDocumentsBody = documentSrc?.map((document: string) => ({
          title: `${serviceProvided} - ${format(new Date(), 'yyyy-MM-dd')}.pdf`,
          documentSrc: document,
          landId: landId,
          uploaderId: currentUser.id,
          serviceId: serviceId,
        }));
        await tx.landImage.createMany({
          data: landImageBody,
        });
        await tx.document.createMany({
          data: landDocumentsBody,
        });
      })
      .catch(async (e) => {
        console.log('error');
        console.error(e);
        error = e;
        return NextResponse.error();
      });
  }

  if (error) {
    return NextResponse.error();
  } else {
    console.log(service);
    return NextResponse.json(service);
  }
}
