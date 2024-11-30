
async function disableVoices() {
  const { PrismaClient } = require('@prisma/client');

  const prisma = new PrismaClient();

  try {
    // Fetch all Companion records
    const companions = await prisma.companion.findMany();

    // Update the voiceId for each Companion
    for (const companion of companions) {
      console.log(companion.name);

      // Update the record in the database
      await prisma.companion.update({
        where: { id: companion.id },
        data: {
          voiceId: 'none',
        },
      });
    }

    // Delete from the Voice table where name is not "none"
    await prisma.voice.deleteMany({
      where: {
        name: {
          not: "none"
        },
      },
    });

    console.log('Voices disabled successfully.');
  } catch (error) {
    console.error('Error updating instanceHandles:', error);
  } finally {
    await prisma.$disconnect();
  }
}

disableVoices();