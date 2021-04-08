import React from 'react';
import { Button, Icon, Popup } from 'semantic-ui-react';

export const SubscribeButton = ({
  isSubscriber,
  isCustomer,
  openSubscribeModal,
  openManage,
}: {
  isSubscriber: boolean;
  isCustomer: boolean;
  openSubscribeModal: () => void;
  openManage: () => void;
}) => {
  return (
    <>
      {!isSubscriber && (
        <Popup
          trigger={
            <Button
              fluid
              color="orange"
              className="toolButton"
              icon
              labelPosition="left"
              onClick={openSubscribeModal}
            >
              <Icon name="plus" />
              Subscribe
            </Button>
          }
        />
      )}
      {isSubscriber && (
        <Popup
          trigger={
            <Button
              fluid
              color="orange"
              className="toolButton"
              icon
              labelPosition="left"
              onClick={openManage}
            >
              <Icon name="wrench" />
              Manage
            </Button>
          }
        />
      )}
    </>
  );
};
