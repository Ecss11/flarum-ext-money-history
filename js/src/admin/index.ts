import app from 'flarum/admin/app';

app.initializers.add('ecss11/flarum-ext-money-history', () => {
  app.extensionData.for("mattoid-money-history")
  .registerPermission(
    {
      icon: 'fas fa-id-card',
      label: app.translator.trans('mattid-money-histoory.admin.settings.query-others-history'),
      permission: 'money-history.queryOthersMoneyHistory',
      allowGuest: true
    }, 'view')
});
