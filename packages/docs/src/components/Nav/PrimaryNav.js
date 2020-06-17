import React from 'react';
import PrimaryNavItem from './NavItem.js';
import PrimarySubNavItem from './SubNavItem.js';
import css from './Nav.module.css';

const isProd = process.env.NODE_ENV === 'production';

function PrimaryNav({ data = [], toggleStatus }) {
  return (
    <nav className={css.nav}>
      <ul className={css.main}>
        <PrimaryNavItem
          href="/overview"
          label="Overview"
          isActive={false}
          subNavItem={
            <ul className={css.secondary}>
              <PrimarySubNavItem
                title="Principals"
                url="/overview/principals"
              />
              <PrimarySubNavItem
                title="Deisgn Tokens"
                url="/overview/design-tokens"
              />
              <PrimarySubNavItem title="Support" url="/overview/support" />
              <PrimarySubNavItem
                title="Version History"
                url="/overview/version-history"
              />
            </ul>
          }
        />

        <PrimaryNavItem
          isActive={false}
          href="/tools"
          label="Tools"
          toggleStatus={toggleStatus}
          subNavItem={
            <ul className={css.secondary}>
              <PrimarySubNavItem
                title="Playroom"
                url={isProd ? './playroom/' : 'http://localhost:5003'}
                isActive={true}
                isNewTab={true}
              />
              <PrimarySubNavItem
                title="Storybook"
                url={isProd ? './storybook/' : 'http://localhost:5000'}
                isActive={true}
                isNewTab={true}
              />
            </ul>
          }
        />
        <PrimaryNavItem
          isActive={false}
          href="/developers"
          label="Developers"
          toggleStatus={toggleStatus}
          subNavItem={
            <ul className={css.secondary}>
              <PrimarySubNavItem
                title="Usage"
                url="/developers/usage"
                isActive={true}
              />
              <PrimarySubNavItem
                title="Contributing"
                url="/developers/contributing"
                isActive={false}
              />
            </ul>
          }
        />
        <PrimaryNavItem
          isActive={false}
          href="/guidelines"
          label="Guidelines"
          toggleStatus={toggleStatus}
          subNavItem={
            <ul className={css.secondary}>
              {data
                .filter((page) => page.node.frontmatter.group === 'Guidelines')
                .map(({ node: post }) => {
                  return (
                    <PrimarySubNavItem
                      key={post.id}
                      title={post.frontmatter.title}
                      url={post.frontmatter.path}
                    />
                  );
                })}
            </ul>
          }
        />
        <PrimaryNavItem
          href="/patterns"
          label="Patterns"
          toggleStatus={toggleStatus}
          subNavItem={
            <ul className={css.secondary}>
              {data
                .filter((page) => page.node.frontmatter.group === 'Patterns')
                .map(({ node: post }) => {
                  return (
                    <PrimarySubNavItem
                      key={post.id}
                      title={post.frontmatter.title}
                      url={post.frontmatter.path}
                    />
                  );
                })}
            </ul>
          }
        />
        <PrimaryNavItem
          href="/components"
          label="Components"
          subNavItem={
            <ul className={css.secondary}>
              {data
                .filter((page) => page.node.frontmatter.group === 'Components')
                .map(({ node: post }) => {
                  return (
                    <PrimarySubNavItem
                      key={post.id}
                      title={post.frontmatter.title}
                      url={post.frontmatter.path}
                      isActive={post.frontmatter.status !== 'Pending'}
                    />
                  );
                })}
            </ul>
          }
        />
      </ul>
    </nav>
  );
}

export default PrimaryNav;
