import React from 'react';
import { Button, Container } from '@components/index';
import { Col } from '@components/index';
import { Tabs, TabPane } from '@components/index';
import { TemplateCart } from '@components/index';
import {
  PageTitle,
  TemlatesContainer,
  TemplatesSection,
} from '../styles/chooseTemplates';
import { AllTemplatesImage } from '../utils/images';
import { routes } from '../utils/routes';
import Link from 'next/link';

export const ChooseTemplates: React.FC = () => {
  const filteredProdesign = routes.filter((template) => {
    return template.path.includes('predesign');
  });
  const filteredBlank = routes.filter((template) => {
    return template.path.includes('blank');
  });
  return (
    <>
      <TemplatesSection>
        <Container>
          <Col xs={12} alignItems="center">
            <PageTitle variant="h3" strong>
              Pick your template
            </PageTitle>
          </Col>
          <Col xs={12}>
            <Tabs>
              <TabPane tab="Predesigned Templates">
                <TemlatesContainer>
                  {filteredProdesign.map((route) => {
                    const src =
                      AllTemplatesImage[
                        route.path as keyof typeof AllTemplatesImage
                      ];
                    return (
                      <TemplateCart
                        template={route}
                        src={src}
                        key={route.path}
                      />
                    );
                  })}
                </TemlatesContainer>
              </TabPane>
              <TabPane tab="Balnk templates">
                <TemlatesContainer>
                  {filteredBlank.map((route) => {
                    const src =
                      AllTemplatesImage[
                        route.path as keyof typeof AllTemplatesImage
                      ];
                    return (
                      <TemplateCart
                        template={route}
                        src={src}
                        key={route.path}
                      />
                    );
                  })}
                </TemlatesContainer>
              </TabPane>
              <TabPane tab="Create Page">
                <Link href="/create">
                  <Button>Create</Button>
                </Link>
              </TabPane>
            </Tabs>
          </Col>
        </Container>
      </TemplatesSection>
    </>
  );
};
