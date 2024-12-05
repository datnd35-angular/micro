# Micro

## Init Micro Frontend Angular with Nx:

- Create a new Nx workspace `npx create-nx-workspace` (Could be a select option directly configured for an Angular application.)
- install @nx/angular `nx g @nx/angular:host apps/shell --remotes=micro_sub1,micro_sub2`;

## Config submodule:

- Open terminal at Apps ``git submodule add git_url`

## Clone code:

- ` git clone https://github.com/datnd35-angular/micro.git`
- At Apps `git submodule update --init --recursive`
