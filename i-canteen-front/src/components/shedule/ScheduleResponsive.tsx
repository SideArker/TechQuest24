import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

const ScheduleResponsive = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div>
        <Modal opened={opened} onClose={close} withCloseButton={false}>
            MODAL DZIAŁA!!!!!
        </Modal>
        <Button onClick={() => open()}>Open Modal</Button>
    </div>
  )
}

export default ScheduleResponsive