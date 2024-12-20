import { Button, Flex, Image, Typography } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import CountUp from 'react-countup';
// import { Card } from '../../../index';
import { Card } from './card-base';

// type Props = CardProps;
// : Props
export const GetStartedCard = ({ ...others }) => {
  return (
    <Card {...others}>
      <Flex justify="space-between" align="center" gap="middle">
        <Flex vertical gap="large" align="flex-start">
          <Typography.Title level={4} style={{ margin: 0 }}>
            You have <CountUp end={2} /> projects to finish this week
          </Typography.Title>
          <Typography.Text>
            You have already completed 68% of your monthly target. Keep going to
            achieve your goal.
          </Typography.Text>
          <Button type="primary" size="middle">
            Get started <RightOutlined />
          </Button>
        </Flex>
        <Image
          src="/get-started.png"
          height={180}
          preview={false}
          style={{ objectFit: 'cover' }}
        />
      </Flex>
    </Card>
  );
};
