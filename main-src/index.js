app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'html'));
app.use(express.static(path.join(__dirname, 'public')));
