init:
	git submodule init
	if [ ! -d "node_modules" ]; then npm install; fi

update-backstage:
	git submodule update --remote
	if [ ! -d "node_modules" ]; then npm install; fi
	npm install --save-dev --force @backstage/core-plugin-api @backstage/test-utils @backstage/plugin-search-react @backstage/theme @backstage/plugin-catalog-react @backstage/plugin-home-react @backstage/plugin-azure-devops-common @backstage/plugin-home @backstage/plugin-search @backstage/plugin-microsoft-calendar @backstage/plugin-stack-overflow @backstage/plugin-gcalendar @material-ui/lab material-ui-popup-state @react-hookz/web @material-table/core humanize-duration @rjsf/material-ui
