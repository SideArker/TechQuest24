import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

const ScheduleResponsive = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
        <Modal
          opened={opened}
          onClose={close}
          withCloseButton={true}
          title="Example Modal"
          className=''
        >
            aaaaaaaaaaa
        </Modal>
        <Button onClick={() => { console.log('Opening modal'); open(); }}>Open Modal</Button>
    </div>
  )
}

export default ScheduleResponsive;
